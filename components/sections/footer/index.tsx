import { socialItems } from "./contants";
import SocialMediaItem from "./social-media-item";

const Footer = () => {
  return (
    <div id="contact" className="pattern custom-container p-5">
      <div className="w-full border-black/30 border-2 p-5 bg-secondary/20 backdrop-blur-xs rounded-2xl">
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-bold">تماس با ما</h4>
          <p className="font-bold text-foreground/80 text-xs">
            برای ثبت نام میتوانید یکی از راه های ارتباطی زیر را انتخاب کنید
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-2 mt-4 items-end">
            {socialItems.map((item, index) => (
              <SocialMediaItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
