const json = 'application/json';

const createAuthHeader = accessToken => ({
  Authorization: `Bearer ${accessToken}`,
});

export const acceptHeader = { Accept: json };
export const contentTypeHeader = { 'Content-Type': json };

export const bodyHeaders = {
  ...acceptHeader,
  ...contentTypeHeader,
};
export const authHeaders = accessToken => ({
  ...acceptHeader,
  ...createAuthHeader(accessToken),
});
export const authBodyHeaders = accessToken => ({
  ...bodyHeaders,
  ...createAuthHeader(accessToken),
});
