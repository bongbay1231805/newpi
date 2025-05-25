'use client';
import Link from 'next/link'
import Image from 'next/image';
import styles from './footer.module.css';
export function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className={`bg-gray-3 text-white  text-center sm:text-left`}>
      <div className={`pt-16 ${styles.bgfooter}`}>
        <div className={`mx-auto max-w-[1582px]`}>
          <div className="grid grid-cols-[340px_1fr_370px] gap-8">
            <div className="flex items-center justify-center sm:justify-normal">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/logo-c.svg" width={180} height={180} alt="Logo" />
              </Link>
            </div>
            <div className='mt-[40px]'>
              <h3 className="text-xl font-bold mb-[20px] text-gray-4">TẬP ĐOÀN PI GROUP</h3>
              <ul className=" text-gray-6">
                <li className="flex items-center"><Image src="/area.png" width={30} height={30} className='mr-[5px]' alt="envelope" />663 – 665 Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh</li>
                <li className="flex items-center"><Image src="/call.png" width={30} height={30} className='mr-[5px]' alt="call" />1900 9999 08</li>
                <li className="flex items-center"><Image src="/envelope.png" width={26} height={26} className='mr-[11px]' alt="area" />info@pigroup.vn</li>
              </ul>
            </div>
            <div className='mt-[30px] leading-[30px]'>
              <ul className="space-y-2 text-gray-6 uppercase">
                <li><Link href="/#" className="hover:text-yellow-1 text-gray-6 font-semibold">Giới thiệu</Link></li>
                <li><Link href="/#" className="hover:text-yellow-1  text-gray-6 font-semibold">Hệ Sinh Thái</Link></li>
                <li><Link href="/#" className="hover:text-yellow-1  text-gray-6 font-semibold">Đô thị số Picity</Link></li>
                <li><Link href="/#" className="hover:text-yellow-1  text-gray-6 font-semibold">Tin Tức</Link></li>
                <li><Link href="/#" className="hover:text-yellow-1  text-gray-6 font-semibold">Phát Triển Nhân Lực</Link></li>
                <li><Link href="/#" className="hover:text-yellow-1  text-gray-6 font-semibold">Liên Hệ</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" bg-gray-4 text-center py-[24px_40px mt-[65px]">
          <div className="relative container pb-[30px] grid grid-cols-1 md:grid-cols-3 m-auto text-left max-w-[1582px]">
            <div>
              <p className="text-yellow-2/70 pt-[24px]">©2025 Pi Group. All Rights Reserved.</p>
              <p className='text-gray-7/70'>Design with heart by TQ DESIGN</p>
            </div>
            <div>
              <Image
                onClick={handleClick}
                src="/to-top.svg"
                alt="Modern city skyline"
                width={45}
                height={45}
                className='absolute right-0 top-1/2 -translate-y-1/2'
              />
            </div>
            <div className='flex md:justify-center items-center gap-[15px] pr-[58px] mt-[26px]'>
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/fb.svg" width={41} height={41} alt="Social" />
              </Link>
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/yt.svg" width={41} height={41} alt="Social" />
              </Link>
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/tk.svg" width={41} height={41} alt="Social" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}