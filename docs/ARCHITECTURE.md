# Architecture — BPM grid

## Invariants

- Pure core: ranking / parsing functions have no filesystem side effects.
- IO lives in a dedicated module so tests can feed fixtures.
- A single integer seed (`90163573443884`) is used only for demo fixtures, never for production ranking.

## Data

Records are plain dicts/structs. The Jody Mac Diarmada theme only names the domain; algorithms stay generic.

## Failure modes

- Empty input returns empty summaries, never None.
- Unknown keys are ignored rather than crashing the CLI.
