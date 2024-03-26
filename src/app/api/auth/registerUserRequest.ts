import { IRegisterForm } from '@/ts/interfaces/IRegisterForm';
import { axiosClient } from '../axiosClient';
import axios from 'axios';
import { IApiError } from '@/ts/interfaces/IApiError';

export async function registerUserRequest(data: IRegisterForm) {
  try {
    const response = await axiosClient.post('/auth/register', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorData: IApiError = error.response?.data;
      throw new Error(errorData.message);
    }
    throw new Error('An error occurred while registering the user!');
  }
}
