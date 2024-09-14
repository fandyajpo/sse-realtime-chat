"use client";
export interface IScreen {
  id?: string;
  imageStyle?: string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}
const Screen = (props: IScreen) => {
  return (
    <section
      key={props.id}
      id={props.id}
      className={`flex flex-col items-center ${props?.className ?? null}`}
      style={{
        backgroundColor: props.color,
      }}
    >
      <div className="sm:max-w-3xl md:max-w-5xl lg:max-w-6xl duration-100 xl:max-w-screen-lg 2xl:max-w-screen flex flex-col grow w-full h-full p-4">
        {props.children}
      </div>
    </section>
  );
};

export default Screen;
