const createAuthHeader = accessToken => ({
  Authorization: `Bearer ${accessToken}`,
});

export const acceptHeader = { Accept: 'application/vnd.caravan-server.com; version=1' };
export const contentTypeHeader = { 'Content-Type': 'application/json' };

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
