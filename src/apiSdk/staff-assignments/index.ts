import axios from 'axios';
import queryString from 'query-string';
import { StaffAssignmentInterface, StaffAssignmentGetQueryInterface } from 'interfaces/staff-assignment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStaffAssignments = async (
  query?: StaffAssignmentGetQueryInterface,
): Promise<PaginatedInterface<StaffAssignmentInterface>> => {
  const response = await axios.get('/api/staff-assignments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createStaffAssignment = async (staffAssignment: StaffAssignmentInterface) => {
  const response = await axios.post('/api/staff-assignments', staffAssignment);
  return response.data;
};

export const updateStaffAssignmentById = async (id: string, staffAssignment: StaffAssignmentInterface) => {
  const response = await axios.put(`/api/staff-assignments/${id}`, staffAssignment);
  return response.data;
};

export const getStaffAssignmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/staff-assignments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStaffAssignmentById = async (id: string) => {
  const response = await axios.delete(`/api/staff-assignments/${id}`);
  return response.data;
};
