import type {ComponentType, SVGProps} from 'react';

import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Gauge, GraduationCap, ShieldCheck, Sparkles, Users, Workflow} from 'lucide-react';

import {Container} from '../components/Container';
import {Reveal} from '../components/Reveal';
import {SectionHeading} from '../components/SectionHeading';
import {site} from '../data/site';

// Icons align to the default focus order; falls back gracefully if edited.
const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Sparkles,
  ShieldCheck,
  Workflow,
  GraduationCap,
  Gauge,
  Users,
];

export function Focus() {
  return (
    <section id="focus" className="section section-anchor">
      <Container>
        <VStack gap={6} hAlign="start">
          <Reveal>
            <SectionHeading eyebrow="Focus" title="What I work on" />
          </Reveal>
          <Grid columns={{minWidth: 240}} gap={4} width="100%">
            {site.focus.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="focus-card">
                  <Card padding={4} height="100%">
                    <VStack gap={3} hAlign="start">
                      <span className="icon-tile">
                        <Icon icon={ICONS[i % ICONS.length]} size="md" color="accent" />
                      </span>
                      <Text type="body" weight="semibold" color="primary">
                        {item}
                      </Text>
                    </VStack>
                  </Card>
                </div>
              </Reveal>
            ))}
          </Grid>
        </VStack>
      </Container>
    </section>
  );
}
