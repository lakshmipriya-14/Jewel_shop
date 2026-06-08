# TODO - Venus Silver Fixes (Shop By Category Mobile, Header Search Mobile, Duplicate Email Registration)

## Step 1: Shop By Category mobile scroll + one-row layout
- Update `app/page.tsx` category scroller to enforce:
  - `flex-nowrap`, `overflow-x-auto`
  - `snap-x snap-mandatory`
  - hide scrollbar
  - no wrapping (`whitespace-nowrap`, `shrink-0`, prevent label wrap)
  - Keep desktop grid unchanged.

## Step 2: Mobile header search visibility
- Update `components/Header.tsx` so the search icon/control is always reachable on mobile.
- Ensure mobile search input is accessible without overlap.

## Step 3: Duplicate email registration validation
- Update `app/auth/register/page.tsx` to block registration if email already exists.
- Implement case-insensitive + trimmed check.
- Show required message:
  "This email address is already registered. Please sign in or use a different email."

## Step 4: QA / build
- Run build/lint.
- Manual QA for the 3 issues above.

