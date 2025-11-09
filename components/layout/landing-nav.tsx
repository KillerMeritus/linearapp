'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { clsx } from 'clsx';

const textBtn = (hover = 'hover:bg-white/10') =>
  clsx(`px-3 py-2 text-[#8a8f98] ${hover} text-sm font-light rounded-lg transition-colors cursor-pointer`);

interface MenuItem {
  topic: string;
  desc: string;
  px?: string;
}

function GetMenu({ topic, desc, px = 'px-1' }: MenuItem) {
  return (
    <div className="relative flex flex-col">
      <a className={clsx(`mt-2 ${px} py-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer`)}>
        <h2 className="text-sm" style={{ color: '#f7f8f8' }}>{topic}</h2>
        <p className="text-xs tracking-tight" style={{ color: '#62666a' }}>{desc}</p>
      </a>
    </div>
  );
}

function GetProductMenu() {
  return (
    <div className="absolute z-[1] w-[32rem] h-auto py-6 mt-2 -translate-x-20 rounded-xl" style={{ background: '#090a0b', border: '1px solid #23252a' }}>
      <div className="flex absolute top-2 left-2 right-2 bottom-16 rounded-lg" style={{ border: '1px solid #23252a', background: '#161616' }}>
        <div className="flex flex-col w-56 top-3 px-5 py-4 border-r" style={{ borderColor: '#23252a' }}>
          <span className="text-xs px-2" style={{ color: '#62666a' }}>Core Features</span>
          <GetMenu topic="Plan" desc="Set the product direction with projects and initiatives" />
          <GetMenu topic="Build" desc="Make progress with issue tracking and cycle planning" />
        </div>
        <div className="flex flex-col grow top-3 px-5 py-4">
          <span className="text-xs px-2" style={{ color: '#62666a' }}>More</span>
          <div className="grid grid-flow-col grid-rows-3 gap-1">
            <GetMenu topic="Customer requests" desc="Manage user feedback" px="px-2" />
            <GetMenu topic="Insights" desc="Realtime analytics" px="px-2" />
            <GetMenu topic="Linear Asks" desc="Workplace requests" px="px-2" />
            <GetMenu topic="Integrations" desc="Collaborate across tools" px="px-2" />
            <GetMenu topic="Mobile app" desc="Linear in your pocket" px="px-2" />
            <GetMenu topic="Linear for Agents" desc="Collaborate with AI teammates" px="px-2" />
          </div>
        </div>
      </div>
      <div className="flex grow mt-24 px-6 py-1 justify-between">
        <a className={clsx(`${textBtn()} !text-[#f7f8f8]`)}>New: Agent Interaction Guidelines and SDK</a>
        <button className={clsx(`${textBtn()} !text-[#828fff]`)}>Changelog</button>
      </div>
    </div>
  );
}

function GetResourceMenu() {
  return (
    <div className="absolute z-[1] w-[32rem] h-auto py-6 mt-2 -translate-x-20 rounded-xl" style={{ background: '#090a0b', border: '1px solid #23252a' }}>
      <div className="flex absolute top-2 left-2 right-2 bottom-2 rounded-lg" style={{ border: '1px solid #23252a', background: '#161616' }}>
        <div className="flex flex-col w-56 top-3 px-5 py-4 border-r" style={{ borderColor: '#23252a' }}>
          <span className="text-xs px-2" style={{ color: '#62666a' }}>Company</span>
          <GetMenu topic="About" desc="Meet the team" />
          <GetMenu topic="Careers" desc="We're hiring" />
        </div>
        <div className="flex flex-col grow top-3 px-5 py-4">
          <span className="text-xs px-2" style={{ color: '#62666a' }}>Explore</span>
          <div className="grid grid-flow-col grid-rows-3 gap-1">
            <GetMenu topic="Developers" desc="Build on the Linear API" px="px-2" />
            <GetMenu topic="Security" desc="Safe, secure, and private" px="px-2" />
            <GetMenu topic="Docs" desc="How to use Linear" px="px-2" />
            <GetMenu topic="Switch to Linear" desc="Migration guide" px="px-2" />
            <GetMenu topic="Download" desc="Get the app" px="px-2" />
            <GetMenu topic="Quality" desc="Conversation on quality" px="px-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ label }: { label: string }) {
  const [open, setOpen] = useState(false);

  const DropMenu = () => {
    if (label === 'Product') {
      return <GetProductMenu />;
    } else {
      return <GetResourceMenu />;
    }
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={textBtn('group-hover:bg-white/10')}>{label}</button>
      {open && <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>}
      {open && <DropMenu />}
    </div>
  );
}

export function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ borderBottom: '1px solid #23252a', background: 'rgba(9, 10, 11, 0.8)' }}>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="max-w-5xl px-4 mx-auto relative flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link href="/" className="flex items-center">
              <svg height="20" viewBox="0 0 400 100" fill="currentColor" style={{ color: '#f7f8f8' }} aria-label="Linear">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589ZM201.602 27.535c3.587 0 6.494-2.918 6.494-6.5175S205.189 14.5 201.602 14.5c-3.586 0-6.493 2.918-6.493 6.5175s2.907 6.5175 6.493 6.5175Zm-55.621 56.8396V14.5039h11.54v59.648h31.115v10.2227h-42.655Zm82.136-28.511v28.511h-11.166V34.8555h11.026v8.4876l.14-.0937c1.121-2.6573 2.928-4.8769 5.42-6.6589 2.491-1.8132 5.668-2.7198 9.531-2.7198 3.426 0 6.54.766 9.344 2.2978 2.803 1.5006 5.045 3.7045 6.727 6.6119 1.682 2.9074 2.523 6.4713 2.523 10.6916v30.9026h-11.166V55.0195c0-3.7514-.997-6.5963-2.99-8.5345-1.962-1.9695-4.594-2.9543-7.896-2.9543-2.118 0-4.049.4377-5.793 1.313-1.744.8754-3.13 2.2196-4.158 4.0328-1.028 1.8132-1.542 4.1422-1.542 6.9871Zm101.105 27.6669c2.554 1.0942 5.482 1.6413 8.783 1.6413 2.71 0 5.03-.3439 6.961-1.0317 1.932-.719 3.52-1.6725 4.766-2.8605 1.277-1.1879 2.289-2.4853 3.037-3.8921h.187v6.9871h10.699V50.2833c0-2.4072-.468-4.6111-1.402-6.6119-.934-2.0008-2.289-3.7358-4.065-5.2051-1.744-1.4694-3.862-2.5948-6.354-3.3763-2.491-.8129-5.295-1.2193-8.409-1.2193-4.267 0-7.958.7347-11.073 2.204-3.084 1.4381-5.497 3.3763-7.242 5.8148-1.744 2.4384-2.694 5.1895-2.85 8.2531h10.793c.124-1.438.623-2.7198 1.495-3.8452.872-1.1254 2.056-2.0008 3.551-2.626 1.495-.6565 3.223-.9848 5.186-.9848 1.962 0 3.628.3283 4.999.9848 1.401.6565 2.476 1.5475 3.223 2.6729.748 1.1254 1.122 2.4384 1.122 3.939v.3752c0 1.1254-.39 1.9538-1.168 2.4853-.748.5314-2.025.9222-3.831 1.1723-1.776.2501-4.205.5471-7.289.891-2.523.2813-4.952.7034-7.288 1.2661-2.336.5627-4.423 1.3912-6.261 2.4853-1.806 1.0942-3.239 2.5479-4.298 4.3611-1.059 1.8132-1.588 4.1422-1.588 6.987 0 3.2826.747 6.0336 2.242 8.2532 1.495 2.1884 3.52 3.8453 6.074 4.9707Zm18.081-8.3001c-1.807.9691-4.034 1.4537-6.681 1.4537-2.679 0-4.813-.5627-6.401-1.6881-1.589-1.1567-2.383-2.7355-2.383-4.7362 0-1.5631.436-2.8293 1.308-3.7984.904-.9691 2.087-1.735 3.551-2.2977 1.464-.5628 3.052-.9535 4.765-1.1724 1.246-.1875 2.461-.3751 3.645-.5627 1.183-.2188 2.289-.422 3.317-.6096 1.028-.2188 1.9-.4377 2.616-.6565.748-.2188 1.293-.4533 1.635-.7034v5.5334c0 1.9382-.451 3.7202-1.355 5.3458-.872 1.5944-2.211 2.8917-4.017 3.8921Zm26.094 9.1442V34.8555h10.745v8.1594h.141c.903-2.8136 2.32-4.955 4.251-6.4244 1.962-1.5005 4.532-2.2508 7.709-2.2508.779 0 1.48.0312 2.102.0938.655.0312 1.2.0625 1.636.0937v10.082c-.405-.0625-1.122-.1406-2.149-.2344-1.028-.0938-2.118-.1407-3.271-.1407-1.838 0-3.519.422-5.046 1.2661-1.526.8441-2.741 2.1415-3.644 3.8921-.872 1.7195-1.308 3.8922-1.308 6.5182v28.4641h-11.166Zm-177.401 0V34.8555h11.166v49.5191h-11.166Zm84.238-2.204c3.582 2.2196 7.834 3.3294 12.755 3.3294 3.8 0 7.257-.6878 10.372-2.0633 3.146-1.4068 5.762-3.3294 7.849-5.7678 2.087-2.4697 3.442-5.3146 4.065-8.5346h-10.512c-.468 1.4693-1.231 2.7667-2.29 3.8921-1.027 1.0942-2.32 1.9539-3.877 2.5792-1.558.6252-3.364.9378-5.42.9378-2.772 0-5.155-.6252-7.148-1.8757-1.962-1.2505-3.457-2.9855-4.485-5.2051-.933-2.043-1.443-4.3564-1.529-6.9402h35.915v-3.0012c0-3.8139-.561-7.284-1.682-10.4102-1.121-3.1575-2.71-5.8773-4.766-8.1594-2.055-2.3134-4.531-4.0953-7.428-5.3458-2.866-1.2505-6.058-1.8757-9.578-1.8757-4.578 0-8.627 1.1098-12.147 3.3294-3.52 2.2196-6.276 5.2833-8.27 9.191-1.993 3.9078-2.99 8.3782-2.99 13.4114 0 5.0019.966 9.4568 2.897 13.3645 1.931 3.8765 4.688 6.9246 8.269 9.1442Zm23.501-32.7783c-1.028-2.1258-2.492-3.767-4.392-4.9237-1.9-1.1567-4.142-1.7351-6.728-1.7351-2.554 0-4.781.5784-6.681 1.7351-1.868 1.1567-3.332 2.7979-4.391 4.9237-.756 1.5396-1.234 3.2903-1.434 5.2521h25.059c-.2-1.9618-.678-3.7125-1.433-5.2521Z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:flex top-[calc(100%+10px)] items-center gap-2 text-base font-sm" style={{ color: '#8a8f98' }}>
            <NavItem label="Product" />
            <NavItem label="Resources" />
            <Link href="#" className={textBtn()}>
              Pricing
            </Link>
            <Link href="#" className={textBtn()}>
              Customers
            </Link>
            <Link href="#" className={textBtn()}>
              Now
            </Link>
            <Link href="#" className={textBtn()}>
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className={clsx(`${textBtn()} hidden md:block`)}>
              Log in
            </Link>
            <Link href="/signup">
              <button
                className="px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer"
                style={{ background: '#d0d6e0', color: '#08090a' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f8f8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#d0d6e0')}
              >
                Sign up
              </button>
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="p-2 -mr-2">
                  <Menu className="h-4 w-4" style={{ color: '#8a8f98' }} />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]" style={{ background: '#090a0b', borderColor: '#23252a' }}>
                <nav className="flex flex-col gap-6 mt-8">
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Product
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Now
                  </Link>
                  <Link
                    href="#"
                    className="text-base font-medium transition-colors"
                    style={{ color: '#8a8f98' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4" style={{ borderTop: '1px solid #23252a' }}>
                    <Link
                      href="/login"
                      className="block mb-4 text-base font-medium transition-colors"
                      style={{ color: '#8a8f98' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f8f8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8a8f98')}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <button
                        className="w-full px-3 py-2 text-sm rounded-lg transition-colors"
                        style={{ background: '#d0d6e0', color: '#08090a' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f8f8')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#d0d6e0')}
                      >
                        Sign up
                      </button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
