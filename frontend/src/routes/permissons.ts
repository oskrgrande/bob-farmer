import { sanitizeUrl } from '@braintree/sanitize-url'
import { Permissions, type PermissionsType } from '@/constants/permissions.js'

export interface RouteDynamicItem {
  permissions: PermissionsType[]
  regexp: RegExp
}

export const staticPermissionRoutes: Record<string, PermissionsType[]> = {
  '/goes': [Permissions.FILE_READ],
  '/admin': [
    Permissions.ALL_ACCESS,
    Permissions.ENTITY_READ,
    Permissions.USER_READ,
    Permissions.PERMISSION_READ,
    Permissions.ROLE_READ,
    Permissions.ADMIN_FOLDER_PATH_READ,
  ],
  '/admin/create-folder': [Permissions.FILE_CREATE, Permissions.ALL_ACCESS],
  '/admin/edit-folder': [Permissions.FILE_UPDATE, Permissions.ALL_ACCESS],
  '/admin/admin-access': [Permissions.ALL_ACCESS, Permissions.ACL_CREATE],
  '/admin/create-role': [Permissions.ROLE_CREATE, Permissions.ALL_ACCESS],
  '/admin/edit-role': [Permissions.ROLE_UPDATE, Permissions.ALL_ACCESS],
  '/admin/create-user': [Permissions.USER_CREATE, Permissions.ALL_ACCESS],
  '/admin/edit-user': [Permissions.USER_UPDATE, Permissions.ALL_ACCESS],
}

export const dynamicPermissionRoutes: RouteDynamicItem[] = [
  {
    regexp: /^\/goes\/\w+$/,
    permissions: [Permissions.FILE_READ],
  },
]

export function getRoutePermissions(pathname: string) {
  const _pathname = sanitizeUrl(pathname)

  // eslint-disable-next-line security/detect-object-injection
  const permissions = staticPermissionRoutes[_pathname]

  if (permissions) return permissions

  const found = dynamicPermissionRoutes.find(item =>
    item.regexp.test(_pathname),
  )

  return found?.permissions ?? []
}
