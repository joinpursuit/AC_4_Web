import collections
import random
import csv


random.seed('123')


def load_file(fn):
    with open(fn, 'rb') as f:
        result = f.read().splitlines()
    return [r for r in result if r and not r.startswith('#')]


# see https://stackoverflow.com/questions/14169122/generating-all-unique-pair-permutations
def round_robin(l):
    d = collections.deque(l)
    n = len(l)
    for i in range(n - 1):
        yield [[d[j], d[-j-1]] for j in range(n/2)]
        d[0], d[-1] = d[-1], d[0]
        d.rotate()


def shuffle_tables(l):
    [random.shuffle(x) for x in list(l)]
    return l


def save_file(seating, fn):
    with open(fn, 'w') as csvfile:
        f = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        for i, day_seating in enumerate(seating):
            f.writerow(['Day %s' % (i + 1)])
            f.writerow([])
            for j, pair in enumerate(day_seating):
                f.writerow(['Table %s' % (j + 1)] + pair)
            f.writerow([])


def main():
    students = load_file('students.txt')
    is_student_count_odd = len(students) % 2 == 1
    if is_student_count_odd:
        students.append(None)
    pairs_for_days = list(round_robin(students))
    seating = shuffle_tables(pairs_for_days)
    save_file(seating, 'seating.csv')


if __name__ == "__main__":
    main()
