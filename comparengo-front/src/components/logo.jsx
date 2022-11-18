import { Image } from "@chakra-ui/react";

const Logo = ({ src }) => <Image src={`${src}`} height="4vh" alt={src} />;

export default Logo;