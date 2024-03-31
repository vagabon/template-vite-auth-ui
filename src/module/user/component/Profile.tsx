import { useAuth } from '@vagabond-inc/react-boilerplate-app';
import { DateUtils, ID } from '@vagabond-inc/react-boilerplate-md';
import { AppConf } from 'conf/AppConf';

export interface IProfileProps {
  id?: ID;
}

const Profile: React.FC<IProfileProps> = () => {
  const { user } = useAuth(AppConf.API_URI);

  return (
    <div className="profile-container">
      <div>Membre depuis {DateUtils.format(user?.creationDate)}</div>
    </div>
  );
};

export default Profile;
