import { useNavigate } from "react-router-dom";

interface NavBarButtonProps {
  href: string;
  buttonText: string;
}

export default function NavBarButton({ href, buttonText }: NavBarButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-0 border-0 text-white px-4 text-xl hover:text p-2 rounded-lg min-w-48"
      onClick={(e) => navigate(href)}
    >
      {buttonText}
    </button>
  );
}
