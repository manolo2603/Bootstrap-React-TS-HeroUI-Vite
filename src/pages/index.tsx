import { Link } from '@heroui/link'
import { Snippet } from '@heroui/snippet'
import { Code } from '@heroui/code'
import { button as buttonStyles } from '@heroui/theme'
import { Accordion, AccordionItem } from '@heroui/accordion'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import DefaultLayout from '@/layouts/default'

const defaultContent =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<span className={title()}>Make&nbsp;</span>
					<span className={title({ color: 'violet' })}>beautiful&nbsp;</span>
					<br />
					<span className={title()}>websites regardless of your design experience.</span>
					<div className={subtitle({ class: 'mt-4' })}>Beautiful, fast and modern React UI library.</div>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						className={buttonStyles({
							color: 'primary',
							radius: 'full',
							variant: 'shadow',
						})}
						href={siteConfig.links.docs}
					>
						Documentation
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: 'bordered', radius: 'full' })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideCopyButton hideSymbol variant="bordered">
						<span>
							Get started by editing <Code color="primary">pages/index.tsx</Code>
						</span>
					</Snippet>
				</div>
				<div style={{ width: '80%' }}>
					<Accordion style={{ width: '100%' }}>
						<AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
							{defaultContent}
						</AccordionItem>
						<AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
							{defaultContent}
						</AccordionItem>
						<AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
							{defaultContent}
						</AccordionItem>
					</Accordion>
				</div>
			</section>
		</DefaultLayout>
	)
}
