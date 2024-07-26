import React from 'react';

interface ButtonProps {
  label: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="inline-block mt-4 px-6 py-3 font-body text-white bg-primary hover:bg-white hover:text-primary rounded"
    >
      {label}
    </a>
  );
};

export default Button;
