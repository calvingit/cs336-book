// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CS336 — 从玩具到真相',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/calvingit/learn-cs336' }],
			markdown: {
				remarkPlugins: [remarkMath],
				rehypePlugins: [rehypeKatex],
			},
			sidebar: [
				{
					label: '🚀 新手村',
					items: [
						{ label: '欢迎', slug: 'kids/01-token-blocks' },
					],
				},
				{
					label: '互动关卡',
					items: [{ autogenerate: { directory: 'kids' } }],
				},
			],
		}),
	],
});
