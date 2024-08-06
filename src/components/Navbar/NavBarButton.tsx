import { useNavigate } from 'react-router-dom';

interface NavBarButtonProps {
  href: string
  buttonText: string
}

export default function NavBarButton({ href, buttonText }: NavBarButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-0 border-0 text-blue-500 px-4 text-xl hover:text-blue-600 p-2 rounded-lg min-w-48"
      onClick={(e) => navigate(href)}
    >
      {buttonText}
    </button>
  )
}
