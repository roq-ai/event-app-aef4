const mapping: Record<string, string> = {
  events: 'event',
  invitations: 'invitation',
  organizations: 'organization',
  registrations: 'registration',
  'staff-assignments': 'staff_assignment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
