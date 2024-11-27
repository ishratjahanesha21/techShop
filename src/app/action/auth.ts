'use server';

import { z } from 'zod';

const signUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  password: z.string().min(8)
});
const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
const authUrl = process.env.NEXT_PUBLIC_AUTH_URL;

export async function signUp(formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    contactNumber: formData.get('contactNumber'),
    password: formData.get('password')
  });

  if (!validatedFields.success) {
    return { error: 'Invalid form data. Please check your inputs.' };
  }

  const { username, email, contactNumber, password } = validatedFields.data;

  try {
    const response = await fetch(`${authUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, contactNumber, password })
    });

    if (!response.ok) {
      throw new Error('Sign up failed');
    }

    const data = await response.json();
    return { success: true, message: 'Sign up successful!' };
  } catch (error) {
    console.error('Sign up error:', error);
    return { error: 'An error occurred during sign up. Please try again.' };
  }
}
//login function
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required')
});

export async function login(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });

  if (!validatedFields.success) {
    return { error: 'Invalid form data. Please check your inputs.' };
  }

  const { email, password } = validatedFields.data;

  try {
    const response = await fetch(`${loginUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return { success: true, message: 'Login successful!' };
  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An error occurred during login. Please try again.' };
  }
}
