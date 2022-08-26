import { FunctionComponent } from 'react';
import {
  Dropdown,
  DropdownLink,
  DropDownSection,
} from '@pellegrims/goldgetters/ui/molecules';
import { Icon, IconButton } from '@pellegrims/goldgetters/ui/atoms';

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface UserMenuProps {
  user?: User;
}

const UserInfo = (props: {
  name: string | null | undefined;
  email: string | null | undefined;
}) => (
  <div className="py-3 px-4">
    <span className="text-dark-900 block text-sm dark:text-white">
      {props.name}
    </span>
    <span className="text-dark-500 dark:text-dark-400 block truncate text-sm font-medium">
      {props.email}
    </span>
  </div>
);

const UserButton: FunctionComponent<{ user?: User }> = ({ user }) => (
  <IconButton>
    {user?.image ? (
      <img className="h-5 w-5 rounded-full" src={user.image} alt="user" />
    ) : (
      <Icon type="user" />
    )}
  </IconButton>
);

export const UserMenu: FunctionComponent<UserMenuProps> = ({ user }) => (
  <Dropdown triggerComponent={<UserButton user={user} />} position="left">
    <DropDownSection>
      <UserInfo name={user?.name} email={user?.email} />
    </DropDownSection>
    <DropDownSection>
      <DropdownLink text="Dashboard" href="/admin/dashboard" />
      <DropdownLink text="Profiel" href="/profile" />
    </DropDownSection>
    <DropDownSection>
      <DropdownLink text="Uitloggen" href="/api/auth/signout" />
    </DropDownSection>
  </Dropdown>
);
