/**
 * Mock Service Layer
 *
 * Central point for all mocked API responses.
 * To wire up real endpoints later, replace each function body with the
 * corresponding axios call and remove the artificial delay.
 *
 * Pattern:
 *   mockService.auth.login(email, password)   ← swap this for real call
 */

const MOCK_DELAY_MS = 400; // simulate network latency

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------------------
// Mock data

export const MOCK_USER = {
  id: '8864c717-587d-472a-929a-8e5f298024da-0',
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  password: 'demo1234',
  photoURL: '/assets/images/avatar/avatar-1.webp',
  phoneNumber: '+98 912 000 0000',
  country: 'Iran',
  address: 'خیابان ولیعصر، تهران',
  state: 'Tehran',
  city: 'Tehran',
  zipCode: '1234567890',
  about: 'توضیحاتی درباره کاربر.',
  role: 'admin',
  isPublic: true,
};

// A trivially valid JWT-shaped token (exp far in the future) for mock sessions.
// This token is NOT cryptographically signed — it is only used locally.
const MOCK_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  btoa(JSON.stringify({ sub: MOCK_USER.id, exp: 9999999999 }))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_') +
  '.mock-signature';

// ---------------------------------------------------------------------------
// Auth service

const authService = {
  /** Simulates POST /api/auth/login */
  async login(_email: string, _password: string) {
    await delay(MOCK_DELAY_MS);
    return { accessToken: MOCK_ACCESS_TOKEN, user: MOCK_USER };
  },

  /** Simulates POST /api/auth/register */
  async register(
    email: string,
    _password: string,
    firstName: string,
    lastName: string
  ) {
    await delay(MOCK_DELAY_MS);
    return {
      accessToken: MOCK_ACCESS_TOKEN,
      user: { ...MOCK_USER, email, displayName: `${firstName} ${lastName}` },
    };
  },

  /** Simulates GET /api/auth/me */
  async me() {
    await delay(MOCK_DELAY_MS);
    return { user: MOCK_USER };
  },
};

// ---------------------------------------------------------------------------
// Aggregated mock service — extend with more domains as needed

export const mockService = {
  auth: authService,
};
