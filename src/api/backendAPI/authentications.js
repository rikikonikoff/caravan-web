import { backendAPIUrl } from '../../utilities/environmentVariables';
import { bodyHeaders } from '../../utilities/apiHeaders';
import { camelizeKeys } from 'humps';

export const create = async ({ values }) => {
  const { token, name, image } = values
  const body = JSON.stringify({ auth: { token, name, image } });
  const response = await fetch(`${backendAPIUrl}/auths`, {
    method: 'POST',
    body,
    headers: bodyHeaders,
  });

  let responseBody = await response.json();
  if(response.ok) {
    return camelizeKeys(responseBody);
  } else {
    throw new Error(responseBody.errors);
  }
}
