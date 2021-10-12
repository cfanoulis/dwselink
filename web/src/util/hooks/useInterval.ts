// Source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/. Used with permission.
// Copyright 2016 Dan Abramov

import { useEffect, useRef } from 'react';

type CallbackFn = (...args: unknown[]) => void;
export function useInterval(callback: CallbackFn, delay: number) {
	const savedCallback = useRef<CallbackFn>(() => {});

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			const id = setInterval(tick, delay);
			return () => clearInterval(id);
		} else {
			return () => {};
		}
	}, [delay]);
}
