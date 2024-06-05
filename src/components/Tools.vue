<script setup>
import { Icon } from '@iconify/vue';
import { shallowRef } from "vue";
import { Tippy } from 'vue-tippy'

const toolsArr = [
	{
		name: "JavaScript",
		icon: "vscode-icons:file-type-js-official",
		url: "developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		name: "Tailwind CSS",
		icon: "devicon:tailwindcss",
		url: "tailwindcss.com/",
	},
	{
		name: "Vue.js",
		icon: "vscode-icons:file-type-vue",
		url: "vuejs.org/",
	},
	{
		name: "Node.js",
		icon: "logos:nodejs-icon",
		url: "nodejs.org/",
	},
	{
		name: "MySQL",
		icon: "logos:mysql",
		url: "mysql.com/",
	},
	{
		name: "MongoDB",
		icon: "vscode-icons:file-type-mongo",
		url: "mongodb.com/",
	},
	{
		name: "Figma",
		icon: "devicon:figma",
		url: "figma.com/",
	},
	{
		name: "Ionic",
		icon: "logos:ionic-icon",
		url: "ionic.io/",
	},
	{
		name: "HTML",
		icon: "devicon:html5",
		url: "html.com/",
	},
	{
		name: "CSS",
		icon: "devicon:css3",
		url: "developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		name: "FileZilla",
		icon: "devicon:filezilla",
		url: "filezilla-project.org/",
	},
	{
		name: "Bootstrap",
		icon: "logos:bootstrap",
		url: "getbootstrap.com/",
	},
	{
		name: "VS Code",
		icon: "logos:visual-studio-code",
		url: "code.visualstudio.com/",
	},
	{
		name: "Github",
		icon: "line-md:github-loop",
		url: "github.com/",
	},
	{
		name: "Git",
		icon: "vscode-icons:file-type-git",
		url: "git-scm.com/",
	},
	{
		name: "Trello",
		icon: "logos:trello",
		url: "trello.com/",
	},
];

const tools = shallowRef(toolsArr);
</script>
<template>
	<div class="card">
		<div class="card-body p-1">
			<div class="card border-2 dark:border-slate-900 h-full min-h-24 card-compact">
				<div class="card-body justify-center">
					<ul class="flex gap-2 flex-wrap items-center lg:justify-start md:justify-evenly justify-start">
						<li v-for="tool in tools" :key="tool.name">
							<a :title="tool.name" target="_blank" rel="noreferrer noopener"
								class="flex gap-x-1 text-xs font-semibold items-center" :href="'https://' + tool.url">
								<Icon :icon="tool.icon" class="text-xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
