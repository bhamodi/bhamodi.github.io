import type {ComponentType, SVGProps} from 'react';

import {Icon} from '@astryxdesign/core/Icon';
import {Link} from '@astryxdesign/core/Link';
import {HStack} from '@astryxdesign/core/HStack';

import {site} from '../data/site';
import {GithubLogo, LinkedinLogo} from './icons';

type IconLinkProps = {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export function IconLink({href, label, icon}: IconLinkProps) {
  return (
    <Link href={href} label={label} target="_blank">
      <Icon icon={icon} size="md" color="inherit" />
    </Link>
  );
}

export function SocialLinks() {
  return (
    <HStack gap={3} vAlign="center">
      <IconLink href={site.socials.github} label="GitHub" icon={GithubLogo} />
      <IconLink
        href={site.socials.linkedin}
        label="LinkedIn"
        icon={LinkedinLogo}
      />
    </HStack>
  );
}
