import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Group, Image } from "@mantine/core";
import pcmLogo from "../assets/pcm.png";
// import cuzlogo from "../assets/cuzlogo.png";
import cuzlogo from "../assets/cavendish.png"
import classes from "../Style.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Ministries" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.innerFooter}>
        <Group gap="xs" justify="" align="center" wrap="nowrap">
          <Anchor href="#">
            <Image src={pcmLogo} alt="logo" className={classes.logo} />
          </Anchor>
          <Anchor href="https://www.cavendishza.org/" target="_blank" rel='noreferrer noopener'>
            {/* TODO: compare the altenative cavendish univerty logo */}
            {/* <Image src={cuzlogo} alt="Cavendish university logo"  className={classes.logo}/> */}
            <Image src={cuzlogo} alt="logo" className={classes.logo} style={{width: '34px', height: 'auto'}} />
          </Anchor>
        </Group>
        <Group className={classes.linksFooter}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
