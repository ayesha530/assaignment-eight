

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <span className="loading loading-dots loading-lg bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"></span>
    </div>
  );
};

export default FullPageLoader;