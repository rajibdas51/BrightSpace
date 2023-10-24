import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-medium text-sky-700'>Hello world</h1>
      <Button>Click me</Button>
    </div>
  );
}
