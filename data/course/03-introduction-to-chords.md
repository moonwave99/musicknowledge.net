---
template: course/lesson
index: 3
id: introduction-to-chords
slug: course/introduction-to-chords
title: Introduction to chords
date: 2026-11-01
description: What's more beautiful than a voice singing? More voices singing together!
cover:
  id: henry_matisse_musique
  caption: Henry Matisse, Musique
---

A chord is **the sound of three or more notes being played at the same time**. Some sources insist that we can have a chord with just two notes, but more often than not you'll play chords with at least three notes.

Let's listen to some chord examples on the piano:

```abc show-piano
M:1/1
Q:200
L:1/1
[CEG] | [A,^CE] | [EGB] | [Dcfa] | [G,FA_Bd]||
```

Some are made of just three notes while others up to five, some have all the notes close together, others have them more spread out. More important, each has its own character.

Very important: the term chord might have a slightly different meaning depending on the musical context. The most common are:

- **the abstract one**: the collection of notes that constitute a chord, in order of pitch.
- **the concrete one**: how a specific chord is played on an instrument.

For instance we'll see in a moment that the **C major** chord is made of the notes **C**, **E** and **G**. We can absolutely play them on our piano! Let's play it based on the middle C:

```abc show-piano show-octaves
M:1/1
Q:200
L:1/1
[CEG]
```

But if you were to start singing _Let it be_, you'll probably need a more robust sound, like:

```abc show-piano start-octave=2 show-octaves
M:1/1
Q:200
L:1/1
%%staves \{V1 V2\}
V:V1 clef=treble
V:V2 clef=bass
[V:V1] [EGc]
[V:V2] [C,,C,]
```

It's still a C major chord because we are just playing the notes **C**, **E** and **G**, even if some of them are played multiple times at different octaves (the two Cs in the left hand, in this case).

We call this a concrete **voicing** of the C major chord on the piano.

This means for example that if you have to play the chords **C major**, **A minor** and **G major** with no further information, you have to decide how to _voice_ them on your instrument depending on the context. Are you comping a singer? Are you making a gentle introduction to a piece? Or are you playing in a band where the bass player is already taking care of the lowest notes?

We'll learn how to develop your own chord voicings by seeing what's happening in the music we like.

## The quality of a chord

Since we already mentioned it, let's have a listen to the chords of the verse of _Let it be_:

```abc show-piano start-octave=2 show-octaves
Q:90
L:2/4
%%staves \{V1 V2\}
V:V1 clef=treble
V:V2 clef=bass
[V:V1] [EGc]   [DGB]   | [EAc]   [FAc]   | [EGc]   [DGB]   | [FAc]/2   [EGB]/4   [DFA]/4    [CEG]   ||
[V:V2] [C,,C,] [G,,G,] | [A,,A,] [F,,F,] | [C,,C,] [G,,G,] | [F,,F,]/2 [E,,E,]/4 [D,,D,]/4  [C,,C,] ||
```

Observe how just the bare chords without the actual original articulation are enough to evoke the song: that's why chords are so important and beautiful to hear!

The song starts with the notes **C2** / **C3** / **E4** / **G4** / **C5** played together. In order to make abstract considerations over a chord, we take into consideration just the unique note names, without their octave information - in this case we have **C** / **E** / **G**.

Chances are that you are already familiar with this group of notes and recognize it as the **C major** chord.

WIP
