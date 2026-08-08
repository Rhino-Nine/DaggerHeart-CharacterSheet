"use client"

import type { CharacterMetadata } from "@/lib/sheet-data"

interface SaveSwitcherProps {
  characterList: CharacterMetadata[]
  currentCharacterId: string | null
  onOpenCharacterManagement: () => void
}

export function SaveSwitcher({
  characterList,
  currentCharacterId,
  onOpenCharacterManagement,
}: SaveSwitcherProps) {
  const currentSave = characterList.find(char => char.id === currentCharacterId)
  const displayName = currentSave?.saveName || '加载中...'

  return (
    <div className="flex h-12 items-center justify-center">
      <h1 className="sr-only">DaggerHeart 角色卡：{displayName}</h1>

      <button
        type="button"
        onClick={onOpenCharacterManagement}
        className="group flex h-full w-full min-w-0 items-center justify-center rounded-md px-3 text-center transition-colors duration-200 hover:bg-accent/60 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`打开存档管理，当前存档：${displayName}`}
        title="打开存档管理"
      >
        <span className="min-w-0 truncate text-center text-lg font-semibold leading-6 text-foreground">
          {displayName}
        </span>
      </button>
    </div>
  )
}
