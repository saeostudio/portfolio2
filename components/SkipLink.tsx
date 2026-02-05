export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed top-0 left-0 w-full p-4 bg-white text-black text-center font-bold z-[200] transform -translate-y-full transition-transform duration-200 focus:translate-y-0 focus:outline-none"
    >
      Skip to content
    </a>
  );
}
