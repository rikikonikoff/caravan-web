import { backendAPIUrl } from '../../utilities/environmentVariables';
import { bodyHeaders } from '../../utilities/apiHeaders';
import { camelizeKeys } from 'humps';
import { normalize, schema } from 'normalizr';

export const createNormalizer = schema => data => {
  const camelizedData = camelizeKeys(data);
  return normalize(camelizedData, schema);
};

const authenticationSchema = new schema.Entity('authentications')

const normalizeAuthentication = createNormalizer({
  user: authenticationSchema,
});

export const create = async ({ values }) => {
  const token: googleToken = values;
  const body = JSON.stringify({ token });
  const response = await fetch(`${backendAPIUrl}/auths`, {
    method: 'POST',
    body,
    headers: bodyHeaders,
  });

  let responseBody;
  if(response.ok) {
    responseBody = await response.json();
    console.log(responseBody)
    return normalizeAuthentication(responseBody);
  } else if (response.status === 401) {
    throw new Error('Unauthorized');
  }
}
