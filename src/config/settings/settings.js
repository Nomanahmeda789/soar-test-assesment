import EditProfile from "../../components/settings/edit-profile/EditProfile";

export const tabItems = [
  {
    key: "editProfile",
    label: "Edit Profile",
    children: <EditProfile />,
  },
  {
    key: "preferences",
    label: "Preferences",
    children: "Content of Preferences",
  },
  {
    key: "security",
    label: "Security",
    children: "Content of Security",
  },
];
