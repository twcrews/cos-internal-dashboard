import { checkInsApiUrl } from 'src/lib/configuration';
import { fetchCollection, fetchSingle } from '../../shared';
import {
  AttendanceType,
  CheckIn,
  CheckInGroup,
  CheckInTime,
  Event,
  EventLabel,
  EventPeriod,
  EventTime,
  Headcount,
  Label,
  Location,
  LocationEventPeriod,
  LocationEventTime,
  LocationLabel,
  Option,
  Organization,
  Pass,
  Person,
  PersonEvent,
	Station,
	Theme,
} from './types';

export const CheckIns = {
  fetch: () => fetchSingle<Organization>(`${checkInsApiUrl}/`),
  checkIns: {
    fetchAll: () => fetchCollection<CheckIn>(`${checkInsApiUrl}/check_ins`),
    select: (id: string) => ({
      fetch: () => fetchSingle<CheckIn>(`${checkInsApiUrl}/check_ins/${id}`),
      checkInGroup: {
        fetch: () =>
          fetchSingle<CheckInGroup>(
            `${checkInsApiUrl}/check_ins/${id}/check_in_group`
          ),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${checkInsApiUrl}/check_ins/${id}/check_in_group/check_ins`
            ),
        },
      },
      checkInTimes: {
        fetchAll: () =>
          fetchCollection<CheckInTime>(
            `${checkInsApiUrl}/check_ins/${id}/check_in_times`
          ),
      },
      eventPeriod: {
        fetch: () =>
          fetchSingle<EventPeriod>(`${checkInsApiUrl}/check_ins/${id}/event_period`),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${checkInsApiUrl}/check_ins/${id}/event_period/check_ins`
            ),
        },
        eventTimes: {
          fetchAll: () =>
            fetchCollection<EventTime>(
              `${checkInsApiUrl}/check_ins/${id}/event_period/event_times`
            ),
        },
        locationEventPeriods: {
          fetchAll: () =>
            fetchCollection<LocationEventPeriod>(
              `${checkInsApiUrl}/check_ins/${id}/event_period/location_event_periods`
            ),
          select: (periodId: string) => ({
            fetch: () =>
              fetchSingle<LocationEventPeriod>(
                `${checkInsApiUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}`
              ),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${checkInsApiUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}/check_ins`
                ),
            },
            location: {
              fetch: () =>
                fetchSingle<Location>(
                  `${checkInsApiUrl}/check_ins/${id}/event_period/location_event_periods/${periodId}/location`
                ),
            },
          }),
        },
      },
      eventTimes: {
        fetchAll: () =>
          fetchCollection<EventTime>(`${checkInsApiUrl}/check_ins/${id}/event_times`),
      },
      locations: {
        fetchAll: () =>
          fetchCollection<Location>(`${checkInsApiUrl}/check_ins/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${checkInsApiUrl}/check_ins/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      options: {
        fetchAll: () =>
          fetchCollection<Option>(`${checkInsApiUrl}/check_ins/${id}/options`),
      },
    }),
  },
  eventTimes: {
    fetchAll: () => fetchCollection<EventTime>(`${checkInsApiUrl}/event_times`),
    select: (id: string) => ({
      fetch: () => fetchSingle<EventTime>(`${checkInsApiUrl}/event_times/${id}`),
      availableLocations: {
        fetchAll: () =>
          fetchCollection<Location>(`${checkInsApiUrl}/event_times/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${checkInsApiUrl}/event_times/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${checkInsApiUrl}/event_times/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      checkIns: {
        fetchAll: () =>
          fetchCollection<CheckIn>(`${checkInsApiUrl}/event_times/${id}/check_ins`),
      },
      eventPeriod: {
        fetch: () =>
          fetchSingle<EventPeriod>(`${checkInsApiUrl}/event_times/${id}/event_period`),
        checkIns: {
          fetchAll: () =>
            fetchCollection<CheckIn>(
              `${checkInsApiUrl}/event_times/${id}/event_period/check_ins`
            ),
        },
        eventTimes: {
          fetchAll: () =>
            fetchCollection<EventTime>(
              `${checkInsApiUrl}/event_times/${id}/event_period/event_times`
            ),
        },
        locationEventPeriods: {
          fetchAll: () =>
            fetchCollection<LocationEventPeriod>(
              `${checkInsApiUrl}/event_times/${id}/event_period/location_event_periods`
            ),
          select: (periodId: string) => ({
            fetch: () =>
              fetchSingle<LocationEventPeriod>(
                `${checkInsApiUrl}/event_times/${id}/event_period/location_event_periods/${periodId}`
              ),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${checkInsApiUrl}/event_times/${id}/event_period/location_event_periods/${periodId}/check_ins`
                ),
            },
            location: {
              fetch: () =>
                fetchSingle<Location>(
                  `${checkInsApiUrl}/event_times/${id}/event_period/location_event_periods/${periodId}/location`
                ),
            },
          }),
        },
      },
      headcounts: {
        fetchAll: () =>
          fetchCollection<Headcount>(`${checkInsApiUrl}/event_times/${id}/headcounts`),
      },
      locationEventTimes: {
        fetchAll: () =>
          fetchCollection<LocationEventTime>(
            `${checkInsApiUrl}/event_times/${id}/location_event_times`
          ),
      },
    }),
  },
  events: {
    fetchAll: () => fetchCollection<Event>(`${checkInsApiUrl}/events`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Event>(`${checkInsApiUrl}/events/${id}`),
      attendanceTypes: {
        fetchAll: () =>
          fetchCollection<AttendanceType>(
            `${checkInsApiUrl}/events/${id}/attendanceTypes`
          ),
      },
      checkIns: {
        fetchAll: () =>
          fetchCollection<CheckIn>(`${checkInsApiUrl}/events/${id}/check_ins`),
      },
      currentEventTimes: {
        fetchAll: () =>
          fetchCollection<EventTime>(
            `${checkInsApiUrl}/events/${id}/current_event_times`
          ),
      },
      eventLabels: {
        fetchAll: () =>
          fetchCollection<EventLabel>(`${checkInsApiUrl}/events/${id}/event_labels`),
      },
      eventPeriods: {
        fetchAll: () =>
          fetchCollection<EventPeriod>(`${checkInsApiUrl}/events/${id}/event_periods`),
        select: (periodId: string) => ({
          fetch: () =>
            fetchSingle<EventPeriod>(`${checkInsApiUrl}/events/${id}/event_period`),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${checkInsApiUrl}/events/${id}/event_period/check_ins`
              ),
          },
          eventTimes: {
            fetchAll: () =>
              fetchCollection<EventTime>(
                `${checkInsApiUrl}/events/${id}/event_period/event_times`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${checkInsApiUrl}/events/${id}/event_period/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${checkInsApiUrl}/events/${id}/event_period/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${checkInsApiUrl}/events/${id}/event_period/location_event_periods/${periodId}/check_ins`
                  ),
              },
              location: {
                fetch: () =>
                  fetchSingle<Location>(
                    `${checkInsApiUrl}/events/${id}/event_period/location_event_periods/${periodId}/location`
                  ),
              },
            }),
          },
        }),
      },
      locations: {
        fetchAll: () =>
          fetchCollection<Location>(`${checkInsApiUrl}/events/${id}/locations`),
        select: (locationId: string) => ({
          fetch: () =>
            fetchSingle<Location>(
              `${checkInsApiUrl}/events/${id}/locations/${locationId}`
            ),
          checkIns: {
            fetchAll: () =>
              fetchCollection<CheckIn>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/check_ins`
              ),
          },
          locationEventPeriods: {
            fetchAll: () =>
              fetchCollection<LocationEventPeriod>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/location_event_periods`
              ),
            select: (periodId: string) => ({
              fetch: () =>
                fetchSingle<LocationEventPeriod>(
                  `${checkInsApiUrl}/events/${id}/locations/${locationId}/location_event_periods/${periodId}`
                ),
              checkIns: {
                fetchAll: () =>
                  fetchCollection<CheckIn>(
                    `${checkInsApiUrl}/events/${id}/locations/${locationId}/location_event_periods/${periodId}/check_ins`
                  ),
              },
            }),
          },
          locationEventTimes: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/location_event_times`
              ),
          },
          locationLabels: {
            fetchAll: () =>
              fetchCollection<LocationEventTime>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/location_labels`
              ),
          },
          locations: {
            fetchAll: () =>
              fetchCollection<Location>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/locations`
              ),
          },
          options: {
            fetchAll: () =>
              fetchCollection<Option>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/options`
              ),
          },
          parent: {
            fetch: () =>
              fetchSingle<Location>(
                `${checkInsApiUrl}/events/${id}/locations/${locationId}/parent`
              ),
          },
        }),
      },
      personEvents: {
        fetchAll: () =>
          fetchCollection<PersonEvent>(`${checkInsApiUrl}/events/${id}/person_events`),
      },
    }),
  },
  headcounts: {
    fetchAll: () => fetchCollection<Headcount>(`${checkInsApiUrl}/headcounts`),
  },
  labels: {
    fetchAll: () => fetchCollection<Label>(`${checkInsApiUrl}/labels`),
    select: (id: string) => ({
      fetch: () => fetchSingle<Label>(`${checkInsApiUrl}/labels/${id}`),
      eventLabels: {
        fetchAll: () =>
          fetchCollection<EventLabel>(`${checkInsApiUrl}/labels/${id}/event_labels`),
      },
      locationLabels: {
        fetchAll: () =>
          fetchCollection<LocationLabel>(
            `${checkInsApiUrl}/labels/${id}/location_labels`
          ),
        select: (labelId: string) => ({
          location: {
            fetch: () =>
              fetchSingle<Location>(`${checkInsApiUrl}/labels/${id}/location`),
            checkIns: {
              fetchAll: () =>
                fetchCollection<CheckIn>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/check_ins`
                ),
            },
            locationEventPeriods: {
              fetchAll: () =>
                fetchCollection<LocationEventPeriod>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods`
                ),
              select: (periodId: string) => ({
                fetch: () =>
                  fetchSingle<LocationEventPeriod>(
                    `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods/${periodId}`
                  ),
                checkIns: {
                  fetchAll: () =>
                    fetchCollection<CheckIn>(
                      `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/location_event_periods/${periodId}/check_ins`
                    ),
                },
              }),
            },
            locationEventTimes: {
              fetchAll: () =>
                fetchCollection<LocationEventTime>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/location_event_times`
                ),
            },
            locationLabels: {
              fetchAll: () =>
                fetchCollection<LocationEventTime>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/location_labels`
                ),
            },
            locations: {
              fetchAll: () =>
                fetchCollection<Location>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/locations`
                ),
            },
            options: {
              fetchAll: () =>
                fetchCollection<Option>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/options`
                ),
            },
            parent: {
              fetch: () =>
                fetchSingle<Location>(
                  `${checkInsApiUrl}/labels/${id}/location_labels/${labelId}/location/parent`
                ),
            },
          },
        }),
      },
    }),
  },
	options: {
		fetchAll: () => fetchCollection<Option>(`${checkInsApiUrl}/options`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Option>(`${checkInsApiUrl}/options/${id}`),
			CheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${checkInsApiUrl}/options/${id}/check_ins`)
			}
		})
	},
  passes: {
    fetchAll: () => fetchCollection<Pass>(`${checkInsApiUrl}/passes`),
  },
	people: {
    fetchAll: () => fetchCollection<Person>(`${checkInsApiUrl}/people`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Person>(`${checkInsApiUrl}/people/${id}`),
			CheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${checkInsApiUrl}/people/${id}/check_ins`)
			},
			organization: {
				fetch: () => fetchSingle<Organization>(`${checkInsApiUrl}/people/${id}/organization`)
			},
			passes: {
				fetchAll: () => fetchCollection<Pass>(`${checkInsApiUrl}/people/${id}/passes`)
			},
			personEvents: {
				fetchAll: () => fetchCollection<PersonEvent>(`${checkInsApiUrl}/people/${id}/person_events`)
			}
		})
	},
	stations: {
		fetchAll: () => fetchCollection<Station>(`${checkInsApiUrl}/stations`),
		select: (id: string) => ({
			fetch: () => fetchSingle<Station>(`${checkInsApiUrl}/stations/${id}`),
			checkInGroups: {
				fetchAll: () => fetchCollection<CheckInGroup>(`${checkInsApiUrl}/stations/${id}/check_in_groups`),
				select: (groupId: string) => ({
					fetch: () => fetchSingle<CheckInGroup>(`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}`),
					checkIns: {
						fetchAll: () => fetchCollection<CheckIn>(`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/check_ins`),
					},
					eventPeriod: {
						fetch: () =>
							fetchSingle<EventPeriod>(`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period`),
						checkIns: {
							fetchAll: () =>
								fetchCollection<CheckIn>(
									`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/check_ins`
								),
						},
						eventTimes: {
							fetchAll: () =>
								fetchCollection<EventTime>(
									`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/event_times`
								),
						},
						locationEventPeriods: {
							fetchAll: () =>
								fetchCollection<LocationEventPeriod>(
									`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods`
								),
							select: (periodId: string) => ({
								fetch: () =>
									fetchSingle<LocationEventPeriod>(
										`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}`
									),
								checkIns: {
									fetchAll: () =>
										fetchCollection<CheckIn>(
											`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}/check_ins`
										),
								},
								location: {
									fetch: () =>
										fetchSingle<Location>(
											`${checkInsApiUrl}/stations/${id}/check_in_groups/${groupId}/event_period/location_event_periods/${periodId}/location`
										),
								},
							}),
						},
					},
				})
			},
			checkedInAtCheckIns: {
				fetchAll: () => fetchCollection<CheckIn>(`${checkInsApiUrl}/stations/${id}/checked_in_at_check_ins`)
			},
			event: {
				fetch: () => fetchSingle<Event>(`${checkInsApiUrl}/stations/${id}/event`)
			},
			location: {
				fetch: () =>
					fetchSingle<Location>(`${checkInsApiUrl}/stations/${id}/location`),
				checkIns: {
					fetchAll: () =>
						fetchCollection<CheckIn>(
							`${checkInsApiUrl}/stations/${id}/location/check_ins`
						),
				},
				locationEventPeriods: {
					fetchAll: () =>
						fetchCollection<LocationEventPeriod>(
							`${checkInsApiUrl}/stations/${id}/location/location_event_periods`
						),
					select: (periodId: string) => ({
						fetch: () =>
							fetchSingle<LocationEventPeriod>(
								`${checkInsApiUrl}/stations/${id}/location/location_event_periods/${periodId}`
							),
						checkIns: {
							fetchAll: () =>
								fetchCollection<CheckIn>(
									`${checkInsApiUrl}/stations/${id}/location/location_event_periods/${periodId}/check_ins`
								),
						},
					}),
				},
				locationEventTimes: {
					fetchAll: () =>
						fetchCollection<LocationEventTime>(
							`${checkInsApiUrl}/stations/${id}/location/location_event_times`
						),
				},
				locationLabels: {
					fetchAll: () =>
						fetchCollection<LocationEventTime>(
							`${checkInsApiUrl}/stations/${id}/location/location_labels`
						),
				},
				locations: {
					fetchAll: () =>
						fetchCollection<Location>(
							`${checkInsApiUrl}/stations/${id}/location/locations`
						),
				},
				options: {
					fetchAll: () =>
						fetchCollection<Option>(
							`${checkInsApiUrl}/stations/${id}/location/options`
						),
				},
				parent: {
					fetch: () =>
						fetchSingle<Location>(
							`${checkInsApiUrl}/stations/${id}/location/parent`
						),
				},
			},
		})
	},
	themes: {
		fetchAll: () => fetchCollection<Theme>(`${checkInsApiUrl}/themes`)
	}
};
