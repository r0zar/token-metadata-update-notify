import { UpdateMetadataForm } from '@/components/home/update-metadata-form'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div />
      <UpdateMetadataForm />
      <div />
    </main>
  )
}
