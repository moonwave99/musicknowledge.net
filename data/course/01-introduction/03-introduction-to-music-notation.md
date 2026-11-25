---
template: course/lesson
module: introduction
index: 1.3
id: introduction-to-music-notation
slug: course/introduction-to-music-notation
title: Introduction to music notation
description: Carve beauty in stone and it will outlive those who witnessed it.
cover:
  id: j_w_waterhouse_saint_cecilia
  caption: J.W. Waterhouse, Saint Cecilia
---

Some people make questionable skin decoration choices that depict completely wrong music symbols. Let's learn the right way of writing music so we can spot those atrocities at parties.

## The staff

The staff (or _stave_, or _pentagram_) is a set of horizontal lines (usually five) with spaces between them, that each represent a different musical pitch ([source][wiki:music-staff]).

<img src="~/src/assets/pictures/empty_staff.svg" width="400" alt="The empty score">

Lines and spaces are counted starting from the bottom, so the lowest is the first line and the topmost is the fifth. To determine which pitch corresponds to which line or space, the staff starts with a **clef symbol**.

```abc show-piano show-octaves title="The treble clef"
M:1/1
L:1/1
G
```

This is the **treble clef**. It tells that **the note on the second line** is a **G4**.

The interval between adjacent staff positions is one step in the **diatonic scale** (i.e. the white keys of the piano). Putting the two things together we have:

```abc show-piano show-octaves title="All the notes in the treble clef"
M:1/1
L:1/1
E F G A B c d e f
w: E F G A B C D E F
```

Considering lines and spaces separately helps the memorization:

```abc show-piano show-octaves title="Lines and spaces of the treble clef"
M:1/1
L:1/1
E G B d f |
w: E G B D F |
F A c e
w: F A C E
```

**E**very **G**ood **B**oy **D**oes **F**ine and well, **FACE** go both a long way.

There are more clefs besides the treble clef, the most common is the **bass clef**, that sets an F3 on the fourth line.

Multiple staves can be combined together. Piano music is usually engraved on the **grand staff**:

```abc show-piano start-octave=2 show-octaves title="The grand staff"
M:1/1
Q:200
L:1/1
%%staves \{V1 V2\}
V:V1 clef=treble
V:V2 clef=bass
[V:V1] G
[V:V2] F,
```

## Ledger lines and spaces around the staff

The range of the treble clef is E4-F5. What if we want to display notes outside it?

First, we can write notes on the spaces **below** and **above** the staff:

```abc show-piano show-octaves title="The notes right below and above the staff"
M:1/1
L:1/1
Dg
w: D G
```

If we need to go further, we can use the **ledger lines**:

```abc show-piano show-octaves title="Ledger lines of the treble clef"
M:1/1
L:1/1
A, B, C | a b c'
w: A B C | A B C
```

These are two octaves of the C major scale:

```abc show-piano show-octaves title="Two octaves of the C major scale"
M:1/1
L:1/1
C D E F G A B c d e f g a b c'
```

All the lines and spaces are filled, with the addition of one ledger line below and two above the staff.

[wiki:music-staff]: https://en.wikipedia.org/wiki/Staff_(music)
