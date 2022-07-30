<script>
	let open = false;
</script>

<div>
	<nav class="bg-primary shadow-2xl text-white">
		<div class="max-w-7xl mb-6 px-8 lg:mx-40 2xl:mx-96">
			<div
				class="flex items-center justify-between h-16 xl:mx-12 2xl:mx-28 3xl:mx-96"
			>
				<div class="flex items-center">
					<a class="flex-shrink-0" href="https://www.left4craft.org">
						<img
							class="h-8 w-8"
							src="./logo.png"
							alt="Left4Craft"
						/>
					</a>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://www.left4craft.org"
							>
								Home
							</a>
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://www.left4craft.org/shop"
							>
								Shop
							</a>
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://wiki.left4craft.org"
							>
								Wiki
							</a>
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://www.left4craft.org/vote"
							>
								Vote
							</a>
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://www.left4craft.org/punishments"
							>
								Bans
							</a>
							<a
								class="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
								href="https://status.left4craft.org"
							>
								Status
							</a>
						</div>
					</div>
				</div>
				<div class="block">
					<div class="ml-4 flex items-center lg:ml-6" />
				</div>
				<div class="-mr-2 flex md:hidden">
					<button
						class="text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
						on:click={() => open = !open}
					>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="h-8 w-8"
							viewBox="0 0 1792 1792"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="md-hidden" hidden={!open}>
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://www.left4craft.org"
				>
					Home
				</a>
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://www.left4craft.org/shop"
				>
					Shop
				</a>
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://wiki.left4craft.org"
				>
					Wiki
				</a>
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://www.left4craft.org/vote"
				>
					Vote
				</a>
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://www.left4craft.org/punishments"
				>
					Bans
				</a>
				<a
					class="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
					href="https://status.left4craft.org"
				>
					Status
				</a>
			</div>
		</div>
	</nav>
</div>
