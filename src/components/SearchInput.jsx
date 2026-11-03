import React from "react";

export default function SearchInput({
  id,
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  ariaLabel = "Search",
  wrapperClassName = "vendors-header-search",
  inputClassName = "",
  clearButtonClassName = "vendors-search-clear",
  clearButtonId,
  shortcutHint,
  inputRef,
  onKeyDown
}) {
  const hasValue = Boolean(value && String(value).length > 0);

  return (
    <div className={wrapperClassName}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="home-search-icon">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        ref={inputRef}
        type="search"
        id={id}
        className={inputClassName || undefined}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
      />
      {shortcutHint ? (
        <kbd className="home-search-kbd" aria-hidden="true">
          {shortcutHint}
        </kbd>
      ) : null}
      {onClear ? (
        <button
          type="button"
          id={clearButtonId}
          className={clearButtonClassName}
          aria-label="Clear search"
          hidden={!hasValue}
          onClick={onClear}
        >
          &times;
        </button>
      ) : null}
    </div>
  );
}

