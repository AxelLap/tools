const Menu = ({ setImage, setSettings }) => {
  return (
    <div className="w-1/2 h-full gap-[100px] flex flex-col items-center p-5 m-[5px]">
      <div className="w-full flex flex-col">
        <label htmlFor="image" className="mb-2">
          Image
        </label>
        <input
          id="image"
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
        />
      </div>

      <div className="w-full">
        <label htmlFor="padding" className="mb-2">
          Padding
        </label>
        <input
          id="padding"
          type="range"
          min={0}
          max="99"
          defaultValue="50"
          className="range range-sm"
        />
      </div>
      <div className="w-full">
        <label htmlFor="radius" className="mb-2">
          Radius
        </label>
        <input
          id="radius"
          type="range"
          min={0}
          max="99"
          defaultValue="50"
          className="range range-sm"
        />
      </div>
      <div className="w-full">
        <label htmlFor="shadow" className="mb-2">
          Shadow
        </label>
        <input
          id="shadow"
          type="range"
          min={0}
          max="99"
          defaultValue="50"
          className="range range-sm"
        />
      </div>
    </div>
  );
};

export default Menu;
