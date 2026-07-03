import {HStack} from '@astryxdesign/core/HStack';
import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';

import {site} from '../data/site';
import {Container} from './Container';
import {SocialLinks} from './SocialLinks';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <HStack hAlign="between" vAlign="center" wrap="wrap" gap={3}>
          <Text type="supporting" color="secondary">
            © {site.copyrightYear} {site.name}. Built with{' '}
            <Link href="https://astryx.atmeta.com/" target="_blank">
              Astryx
            </Link>
            .
          </Text>
          <SocialLinks />
        </HStack>
      </Container>
    </footer>
  );
}
