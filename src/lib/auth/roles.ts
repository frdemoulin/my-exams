import type { Role } from '@prisma/client';

export function normalizeRole(role?: string | null): Role | null {
  if (role === 'ADMIN' || role === 'USER') {
    return role;
  }

  return null;
}

export function isAdminRole(role?: string | null): role is Role {
  return normalizeRole(role) === 'ADMIN';
}

export function canImpersonateRole(role?: string | null): role is Role {
  return normalizeRole(role) === 'ADMIN';
}

export function getRoleLabel(role?: Role | string | null) {
  switch (normalizeRole(role)) {
    case 'ADMIN':
      return 'Administrateur';
    default:
      return 'Utilisateur';
  }
}
