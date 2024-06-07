import { RiShutDownLine } from 'react-icons/ri'
import avatarPlaceholder from "../../assets/placeholder.png";
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Container, Profile, Logout } from './styles'
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOu() {
    navigation("/");
    signOut();

  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img
          src={avatarUrl}
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Rodrigo Gonçalves</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOu}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}