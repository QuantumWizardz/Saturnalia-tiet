export const FooterSection = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <img
          src="../../src/assets/homepage/footer_1.png"
          alt="footer_1"
          className="absolute top-2 left-0 w-full z-0"
        />
        <img
          src="../../src/assets/homepage/footer_2.png"
          alt="footer_2"
          className="relative w-full z-10"
        />
      </div>
      <div className="absolute inset-0 flex  text-white text-3xl z-20">
        <div className="place-self-end p-4">
        </div>
      </div>
    </div>
  );
};

