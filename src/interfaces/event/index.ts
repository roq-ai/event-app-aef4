import { RegistrationInterface } from 'interfaces/registration';
import { StaffAssignmentInterface } from 'interfaces/staff-assignment';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  location: string;
  start_time: any;
  end_time: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  registration?: RegistrationInterface[];
  staff_assignment?: StaffAssignmentInterface[];
  organization?: OrganizationInterface;
  _count?: {
    registration?: number;
    staff_assignment?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  organization_id?: string;
}
