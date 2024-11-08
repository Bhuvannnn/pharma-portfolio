import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Pharmaceutical Design Portfolio',
  description: 'View our pharmaceutical design projects across different categories',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}