namespace SpriteKind {
    export const Chest = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setImage(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`)
    music.baDing.play()
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, sprites.dungeon.floorDark4)
    tiles.setWallAt(tiles.getTileLocation(7, 10), false)
    tiles.setTileAt(tiles.getTileLocation(7, 10), sprites.dungeon.floorDark0)
    tiles.setWallAt(tiles.getTileLocation(7, 11), false)
    tiles.setTileAt(tiles.getTileLocation(7, 11), sprites.dungeon.floorDark4)
})
info.setScore(0)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100001070806000000000000000000000000022e0c0a070807070807070807070706100c0c0c2e0c2d0c0c2e0c2e0c0c2e0d210c2d0c0c0c0c0c0c0c0c0c0c0c0c0d02320c0b20202020200e0c0c0c0c2d23032020050000000000022d0c2e0c0c0d141e1f1e1e16000000020c0c0b202005170c0c313119000000020c0c0d000000182e312f2d1a0001070f0c0c0a07070617312f300c091e100c0c2d0c0c0c0c0d172f2d2f0c2f2f220c2e0c0c0c2e0c25180c2f312f0c2e220c0c0c0c0c0c0c0d170c0c312f281b100c0c0c0c2d0c0c23170c2f2f0c1a00212d0c2e2e0c0c2d25151b1b1c1b1d00210c0c0c0c0c2d0c0d00000000000000032004262026202005`,
            img`
2 2 2 2 . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 . . . . . 2 
2 2 2 2 . . . . . 2 . . . . . 2 
2 2 2 2 2 2 . . . 2 . . 2 2 2 2 
2 . . . . 2 . . . 2 . . 2 . . . 
2 . . . . 2 . 2 2 2 . . 2 2 2 2 
2 . . . . 2 2 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . 2 2 2 . . . . . . . 2 
2 . . . . 2 . 2 . . . . . . . 2 
2 2 2 2 2 2 . 2 . . . . . . . 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.floorDark0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.purpleSwitchUp,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorDark5,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,sprites.dungeon.floorMixed,sprites.dungeon.buttonOrange],
            TileScale.Sixteen
        ))
let chest = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.Chest)
tiles.placeOnTile(chest, tiles.getTileLocation(1, 7))
let mySprite = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Player)
mySprite.setPosition(151, 54)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
