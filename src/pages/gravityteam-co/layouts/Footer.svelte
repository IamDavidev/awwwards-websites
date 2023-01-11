<footer class="footer">
	<div class="divider" />
	<div class="f-header">
		<ul>
			<li>
				<spna>Gravity Team</spna>
			</li>
			<li>
				<spna> About Us</spna>
			</li>
			<li>
				<spna>Work With us</spna>
			</li>
		</ul>
		<div class="f">
			<img src="/gravity-logo.png" alt="" />
		</div>
	</div>
	<div class="terms-and-copy">
		<span>Terms of Use & Privacy Policy</span>
		<span> ©2022 Gravity Team. All Rights Reserved </span>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		color: var(--gravity-text);
		margin-top: var(--divider-top);
	}
	.f-header {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	.f-header > ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.f-header ul li:first-child {
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		font-weight: var(--bold);
		font-size: var(--text-lg);
	}
	.terms-and-copy {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 5rem;
	}
	:global(.divider) {
		width: 100%;
		height: 1px;
		background-image: linear-gradient(45deg, #fff, #09f 100%);
		margin: var(--divider-margin);
		border-radius: 1rem;
	}
</style>
