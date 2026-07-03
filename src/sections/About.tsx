import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

import {Container} from '../components/Container';
import {Reveal} from '../components/Reveal';
import {SectionHeading} from '../components/SectionHeading';
import {site} from '../data/site';

export function About() {
  return (
    <section id="about" className="section section-anchor surface">
      <Container>
        <Reveal>
          <VStack gap={6} hAlign="start">
            <SectionHeading eyebrow="About" title="About me" />
            <div className="measure">
              <VStack gap={4} hAlign="start">
                {site.about.map((paragraph, i) => (
                  <Text key={i} as="p" display="block" type="large" color="secondary">
                    {paragraph}
                  </Text>
                ))}
              </VStack>
            </div>
          </VStack>
        </Reveal>
      </Container>
    </section>
  );
}
