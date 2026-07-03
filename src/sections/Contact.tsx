import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/HStack';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Mail} from 'lucide-react';

import {Container} from '../components/Container';
import {GithubLogo, LinkedinLogo} from '../components/icons';
import {Reveal} from '../components/Reveal';
import {SectionHeading} from '../components/SectionHeading';
import {site} from '../data/site';

function openExternal(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function Contact() {
  return (
    <section id="contact" className="section section-anchor surface">
      <Container>
        <Reveal>
          <VStack gap={6} hAlign="start">
            <SectionHeading eyebrow="Contact" title="Get in touch" />
            <div className="measure">
              <Text as="p" display="block" type="large" color="secondary">
                I’m always happy to connect. The best way to reach me is by email,
                or find me on LinkedIn and GitHub.
              </Text>
            </div>
            <HStack gap={3} vAlign="center" wrap="wrap">
              <Button
                label="Email me"
                variant="primary"
                icon={<Icon icon={Mail} />}
                onClick={() => {
                  window.location.href = `mailto:${site.email}`;
                }}
              />
              <Button
                label="LinkedIn"
                variant="secondary"
                icon={<Icon icon={LinkedinLogo} />}
                onClick={() => openExternal(site.socials.linkedin)}
              />
              <Button
                label="GitHub"
                variant="secondary"
                icon={<Icon icon={GithubLogo} />}
                onClick={() => openExternal(site.socials.github)}
              />
            </HStack>
          </VStack>
        </Reveal>
      </Container>
    </section>
  );
}
