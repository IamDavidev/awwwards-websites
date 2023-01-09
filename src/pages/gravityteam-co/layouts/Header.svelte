<script>
	const titleHeader = 'Balancing Crypto Markets';
</script>

<section class="f-c-c-c">
	<h1 class="title">
		<span class="block">
			{'Balancing'}
		</span>
		<span>
			{'Crypto Markets'}
		</span>
	</h1>
	<p class="description">
		Our fully automated proprietary quantitative trading software provides 24/7
		liquidity to 170+ crypto assets across 25+ centralized spot and derivative
		crypto exchanges.
	</p>
	<button class="btn-header">
		<span> Get in touch </span>
	</button>
</section>

<style>
	.title {
		--gravity-bg: #141619;
		--gravity-text: #fff;
		--gravity-blue: #665dcd;
		--gravity-blue-light: #5fa4e6;
		--gravity-green: #00d1b2;
		--gravity-yellow: #d2ab67;
	}
	.f-c-c-c {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.title {
		text-align: center;
		color: var(--gravity-text);
		font-weight: var(--medium);
		font-size: 72px;
		line-height: 1;
	}
	.description {
		text-align: center;
		color: var(--gravity-text);
		font-weight: var(--regular);
		font-size: 20px;
		line-height: 32px;
		margin-top: 2rem;
		max-width: 584px;
	}
	.btn-header {
		margin-top: 2rem;
		display: inline-flex;
		justify-content: center;
		position: relative;
		padding: 1.2rem 2.2rem;
		border: 0;
		outline: 0;
		background: rgba(0, 0, 0, 0);
		text-align: center;
		overflow: hidden;
	}
	.btn-header:hover::before {
		transform: translate3d(100%, 0, 0);
	}
	.btn-header::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			135deg,
			var(--gravity-blue) 0%,
			var(--gravity-blue-light) 44.76%,
			var(--gravity-yellow) 100%
		);
		transition: transform 1s;
	}
	.btn-header::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		pointer-events: none;
		width: 100%;
		height: 100%;
		border: 3px solid rgba(0, 0, 0, 0);
		border-radius: 2px;
		transition: opacity 1s;
		border-image: linear-gradient(
				135deg,
				#665dcd 0%,
				#5fa4e6 44.76%,
				#d2ab67 100%
			)
			1;
	}
	.btn-header span {
		position: relative;
		z-index: 2;
		color: #fff;
		font-size: 20px;
		font-weight: 500;
		line-height: 1.1;
		text-transform: uppercase;
	}
</style>
