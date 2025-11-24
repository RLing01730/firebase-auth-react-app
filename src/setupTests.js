// src/setupTests.js
// Runs before all tests in Create React App to mock Firebase SDK

// Provide a constructor-compatible mock for GoogleAuthProvider
class MockGoogleAuthProvider {
  constructor() {
    this.providerId = 'google.com';
    this.customParameters = {};
  }
  addScope() { return this; }
  setCustomParameters(params) { this.customParameters = params; return this; }
}

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
  getApps: jest.fn(() => []),
}));

jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({})),
  onAuthStateChanged: jest.fn((auth, cb) => { cb(null); return () => {}; }),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'test' } })),
  createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({ user: { uid: 'test' } })),
  signOut: jest.fn(() => Promise.resolve()),
  GoogleAuthProvider: MockGoogleAuthProvider,
}));
