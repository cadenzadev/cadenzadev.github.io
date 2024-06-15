import { Code, Terminal, Users, Mail } from 'lucide-react';
import { Metadata } from "next";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 px-5 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-10 text-gray-300">Cadenza Development</h1>
        <p className="text-2xl mb-10 text-gray-200">We build software solutions that scale.</p>
        <div className="flex justify-center space-x-10">
          <div>
            <Code size={64} color="orange" />
            <p className="text-xl mt-4 text-gray-300">Custom Software</p>
          </div>
          <div>
            <Terminal size={64} color="orange" />
            <p className="text-xl mt-4 text-gray-300">DevOps Consultancy</p>
          </div>
          <div>
            <Users size={64} color="orange" />
            <p className="text-xl mt-4 text-gray-300">Team Augmentation</p>
          </div>
        </div>
        <div className="mt-10">
          <a href="mailto:inquiries@cadenzadevelopment.com" className="text-xl text-orange-500 hover:underline flex align-center justify-center">
           <Mail size={24} className="mr-2"/>
           Contact us at inquiries@cadenzadevelopment.com
          </a>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Cadenza Development',
}
 
